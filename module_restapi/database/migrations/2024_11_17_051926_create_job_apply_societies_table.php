<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('job_apply_societies', function (Blueprint $table) {
            $table->id();
            $table->text('notes');
            $table->date('date');
            $table->unsignedBigInteger('job_vacancy_id');
            $table->unsignedBigInteger('society_id');
        });

        Schema::create('job_apply_position', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->unsignedBigInteger('society_id');
            $table->unsignedBigInteger('job_vacancy_id');
            $table->unsignedBigInteger('position_id');
            $table->unsignedBigInteger('job_apply_societies_id');
            $table->enum('status', ['pending', 'accepted', 'rejected']);
        });

        Schema::create('job_categories', function (Blueprint $table) {
            $table->id();
            $table->string('job_category');
        });
        
        Schema::create('job_vacancies', function (Blueprint $table) {
            $table->id();
            $table->string('foto');
            $table->string('title');
            $table->text('description');
            $table->decimal('salary', 10, 2);
            $table->string('company');
            $table->string('address');
            $table->unsignedBigInteger('job_category_id');
            $table->timestamps();
        });
        
        Schema::create('available_positions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('job_vacancy_id');
            $table->string('position');
            $table->bigInteger('capacity');
            $table->bigInteger('apply_capacity');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_apply_societies');
        Schema::dropIfExists('job_apply_position');
        Schema::dropIfExists('job_categories');
        Schema::dropIfExists('job_vacancies');
        Schema::dropIfExists('available_positions');
    }
};
