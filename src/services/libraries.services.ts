import { UserLib } from '@/protocols/db.query.protocol';
import * as librariesRepository from '@/repositories/libraries.repository';

export function getLibraries() : Promise<UserLib[]>{
    return librariesRepository.getLibraries();
}