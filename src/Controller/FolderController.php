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
          'Formations',
          'Experiences',
          'Projets',
          'Competences',
          'Hobies',
        ];
        return new JsonResponse($folders);
    }
}
