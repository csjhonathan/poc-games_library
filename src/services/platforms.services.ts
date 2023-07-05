import { Platform } from '@/protocols/protocols';
import * as platformsRepository from '@/repositories/platforms.repository';

export async function createPlatform(name:string) : Promise<void> {
  const result = await platformsRepository.createPlatform(name);
  if(!result){
    throw {message:'Esta plataforma ja está cadastrada!'};
  }
}

export async function getPlatforms() : Promise<Platform[]> {
  return platformsRepository.getPlatforms();
}