<?php

namespace App\Http\Controllers;

use App\Matpel;
use Illuminate\Http\Request;

class MatpelApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $matpel = Matpel::all();
        return $matpel;
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
        $this->validate($request, [
            'kode_matpel' => 'required|string|max:10|unique:matpels',
            'matpel' => 'required',
        ]);
        $matpel = Matpel::create([
            'kode_matpel' => $request->kode_matpel,
            'matpel' => $request->matpel,
            'kelas' => $request->kelas,
        ]);
        $matpel->save();
        return $matpel;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $matpel = Matpel::where('id', $id)->first();
        return $matpel;
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
        $this->validate($request, [
            'matpel' => 'required',
        ]);
        $matpel = Matpel::where('id', $id)->first();
        $matpel->matpel = $request->matpel;
        $matpel->kelas = $request->kelas;
        $matpel->save();
        return $matpel;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Matpel::where('id', $id)->delete();
        return 'Destroyed';
    }
}
