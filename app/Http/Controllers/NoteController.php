<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use  App\Models\Note;

class NoteController extends Controller
{
  /**
   * Instantiate a new NoteController instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('auth');
  }

  /**
   * Get the authenticated User's notes.
   *
   * @return Response
   */
  public function getNotes()
  {
    return response()->json(['notes' => Auth::user()->note()->orderBy('updated_at', 'desc')->get()], 200);
  }

  public function getNote(Note $id)
  {
    $note = Note::find($id);
    return response()->json($note);
  }

  public function create(Request $request)
  {
    try {
      $note = new Note();
      $note->user_id = Auth::user()->id;
      $note->title = $request->title ? $request->title : 'Untitled';
      $note->body = $request->body;

      $note->save();  
      
      return response()->json($note);
    } catch (\Exception $e) {
      if ($e->errorInfo) {
        return response()->json('Error occurred.');
      }
    }
  }

  public function edit(Request $request)
  {
    try {
      $note = Note::find($request->id);
      $note->title = $request->title ? $request->title : 'Untitled';
      $note->body = $request->body;

      $note->save();

      return response()->json($note);
    } catch (\Exception $e) {
      return response()->json('Error occurred.');
    }
  }

  public function delete(Request $request)
  {
    try {
      $note = Note::find($request->id);
      $note->delete();

      return response()->json('Note deleted');
    } catch (\Exception $e) {
      return response()->json('No note found.');
    }
  }
}