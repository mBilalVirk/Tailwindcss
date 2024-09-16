<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('blogs')->insert([
            [
                'title' => 'Exploring the Beauty of Nature',
                'date' => '2023-04-04',
                'image' => 'http://unsplash.it/600/400?random&gravity=center',
                'content' => json_encode([
                    'Nature offers a beautiful respite from the busy city life. The fresh air and breathtaking landscapes bring peace and tranquility.',
                    'In this blog, we will explore the most beautiful natural wonders that you can visit around the world.',
                    'Whether you enjoy hiking through forests, walking along beaches, or simply enjoying a picnic in a park, nature has something for everyone.',
                ]),
            ],
            [
                'title' => 'The Future of Artificial Intelligence',
                'date' => '2023-05-15',
                'image' => 'http://unsplash.it/600/400?random&gravity=center',
                'content' => json_encode([
                    'Artificial Intelligence (AI) is transforming industries and redefining the future of work and technology.',
                    'In this blog, we delve into the latest advancements in AI and its potential impact on society.',
                    'From self-driving cars to personalized healthcare, AI is set to revolutionize our daily lives in the coming decades.',
                ]),
            ],
            [
                'title' => 'Mastering the Art of Cooking',
                'date' => '2023-06-30',
                'image' => 'http://unsplash.it/600/400?random&gravity=center',
                'content' => json_encode([
                    'Cooking is not just about making food; it is an art form that requires creativity, passion, and skill.',
                    'In this blog, we will share tips and recipes that can help you become a master in the kitchen.',
                    'Whether you are a beginner or an experienced cook, there\'s always something new to learn in the world of culinary arts.',
                ]),
            ],
            [
                'title' => 'Top Travel Destinations for 2024',
                'date' => '2023-07-10',
                'image' => 'https://dummyimage.com/600x400.png?text=PlaceHolder',
                'content' => json_encode([
                    'With the world opening up again, many are eager to explore new travel destinations.',
                    'This blog highlights the top travel destinations for 2024, including hidden gems and popular tourist spots.',
                    'From tropical beaches to cultural landmarks, these destinations are perfect for your next adventure.',
                ]),
            ],
        ]);
    }
}
