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
        Schema::create('validations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('job_category_id');
            $table->unsignedBigInteger('society_id');
            $table->unsignedBigInteger('validator_id');
            $table->enum('status', ['accepted', 'declined', 'pending']);
            $table->text('work_experience');
            $table->text('job_position');
            $table->text('reason_accepted');
            $table->text('validator_notes');

        });

        Schema::create('validators', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->enum('role', ['officer', 'validator']);
            $table->string('name');
        });

        Schema::create('regionals', function (Blueprint $table) {
            $table->id();
            $table->string('province');
            $table->string('regencies');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('validations');
        Schema::dropIfExists('validators');
        Schema::dropIfExists('regionals');
    }
};
