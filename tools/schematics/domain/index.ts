import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function(schema: any): Rule {

  return chain([
    // ng g lib feature-create --directory booking --defaults --tags
    externalSchematic('@nrwl/workspace', 'lib', {
      name: 'feature-create',
      directory: schema.name,
      routing: true,
      lazy: true,
      unitTestRunner: 'karma',
      tags: `domain:${schema.name}, type:feature`
    }),
    externalSchematic('@nrwl/workspace', 'lib', {
      name: 'feature-update',
      directory: schema.name,
      routing: true,
      lazy: true,
      unitTestRunner: 'karma',
      tags: `domain:${schema.name}, type:feature`
    }),
    externalSchematic('@nrwl/workspace', 'lib', {
      name: 'ui',
      directory: schema.name,
      unitTestRunner: 'karma',
      tags: `domain:${schema.name}, type:ui`
    }),
    externalSchematic('@nrwl/workspace', 'lib', {
      name: 'domain',
      directory: schema.name,
      unitTestRunner: 'karma',  
      tags: `domain:${schema.name}, type:domain`    
    }),
    externalSchematic('@nrwl/workspace', 'lib', {
      name: 'util',
      directory: schema.name,
      unitTestRunner: 'karma',      
      tags: `domain:${schema.name}, type:util`
    })

  ]);
}
