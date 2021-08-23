<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
  /**
   * Instantiate a new UserController instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('auth');
  }

  /**
   * Get the authenticated User.
   *
   * @return Response
   */
  public function getUser()
  {
    return response()->json([
      'id' => Auth::user()->id,
      'name' => Auth::user()->name
    ], 200);
  }
}