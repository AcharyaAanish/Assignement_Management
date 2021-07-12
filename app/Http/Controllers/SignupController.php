<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Signup;
use Illuminate\Support\Facades\Hash;

class SignupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $sign = new Signup();

        $sign->first_name = $request->input('first_name');
        $sign->last_name =$request->input('last_name');
        $sign->role = $request->input('role');
        $sign->email = $request->input('email');
        $sign->password = Hash::make($request->input('password'));
        $sign->confirm_password = Hash::make($request->input('confirm_password'));
        $sign->save();
        return $sign;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    function login(Request $request)
    {
        $user = Signup::where('email',$request->email)->first();
        if($user && Hash::check($request->password,$user->password)){
            return $user;
        }
        else{
            return ["error" =>"Email or password doesn't match"];
        }
    }
}
