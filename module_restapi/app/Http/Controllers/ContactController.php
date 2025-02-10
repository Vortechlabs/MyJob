<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Contact::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        $fields = $request->validated([
            'name' => 'required|string|min:3|max:255',
            'email' => 'required|email',
            'phone' => 'required|min:10|max:15',
            'message' => 'required|string|min:10'
        ]);

        $contactMessage = Contact::create($fields);

        return response()->json(
            [
                'message' => 'Contact message successfully sent',
                'date' => $contactMessage->created_at
            ]
            );
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
