<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vacancy;

class JobController extends Controller
{
    public function listing(){
        $jobs = Vacancy::orderBy("id","DESC")->get();
        if(count($jobs) > 0){
            return $this->sendResponse($jobs, 'Success');
        }else{
            return $this->sendError('NotFound.', ['error'=>'Jobs not found']);
        }
    }

    public function search(Request $request){
        $search = $request->get('search');
      
        $result = Vacancy::where('country', 'LIKE', '%'. $search. '%')->orWhere('city', 'LIKE', '%'. $search. '%')->orWhere('seniority_level', 'LIKE', '%'. $search. '%')->orWhere('job_title', 'LIKE', '%'. $search. '%')->orWhere('company_domain', 'LIKE', '%'. $search. '%')->get();

        if($result){
            return $this->sendResponse($result, 'Success');
        }else{
            return $this->sendError('NotFound.', ['error'=>'Result not found']);
        }
    }

    public function jobSorting(Request $request)
    {
        $sorting = $request->get('sort');
        $name = $request->get('name');

        if($name === "seniority"){
            $result = Vacancy::orderBy("seniority_level",$sorting)->get();
        }else{
            $result = Vacancy::orderBy("salary",$sorting)->get();
        }
      

        if($result){
            return $this->sendResponse($result, 'Success');
        }else{
            return $this->sendError('NotFound.', ['error'=>'Result not found']);
        }
    }

    public function jobDetails($id)
    {
        $result = Vacancy::where("id",$id)->first();
        return $this->sendResponse($result, 'Success');
    }
}
