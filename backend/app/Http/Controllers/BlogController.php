<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    // Get all blogs
    public function index()
    {
        // Fetch all blog posts from the database
        $blogs = Blog::all();

        // Return the blogs as a JSON response
        return response()->json($blogs);
    }

    // Get a specific blog by ID
    public function show($id)
    {
        // Find the blog by its ID
        $blog = Blog::findOrFail($id);

        // Return the blog as a JSON response
        return response()->json($blog);
    }
}
