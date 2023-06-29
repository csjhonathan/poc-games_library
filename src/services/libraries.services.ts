import { UserLib } from '@/protocols/protocols';
import * as librariesRepository from '@/repositories/libraries.repository';

export function getLibraries() : Promise<UserLib[]>{
    return librariesRepository.getLibraries();
}