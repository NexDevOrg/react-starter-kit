<?php

namespace App\Console\Commands;

use Illuminate\Console\GeneratorCommand;

class MakeRepositoryCommand extends GeneratorCommand
{
    protected $signature = 'make:repository {name : The name of the repository}';

    protected $description = 'Create a new repository class';

    protected $type = 'Repository';

    protected function getStub(): string
    {
        return resource_path('stubs/repository.stub');
    }

    protected function getDefaultNamespace($rootNamespace): string
    {
        return $rootNamespace.'\Repositories';
    }
}
