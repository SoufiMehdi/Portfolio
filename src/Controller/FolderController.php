<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class FolderController extends AbstractController
{
    #[Route('/api/folders', name: 'get_folders', methods: ['GET'])]
    public function getFolders(): Response
    {
        $folders = [
          ['name' => 'Formations', 'sous-dossier' => ['Master 2 en ingenierie logiciel', 'Licence Informatique']],
          ['name' => 'Experiences', 'sous-dossier' => ['Dylog', 'Sonelgaz', 'Numeria', 'Elancia', 'Vilage vacance France']],
          ['name' => 'Projets'],
          ['name' => 'Competences'],
          ['name' => 'Hobies'],
        ];
        return new JsonResponse($folders);
    }
}
