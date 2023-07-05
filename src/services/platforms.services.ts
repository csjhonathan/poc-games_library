import * as platformsRepository from '@/repositories/platforms.repository';

async function getPlatformByName(name:string) {
  return await platformsRepository.getPlatformByName(name);
}
export async function createPlatform(name:string){
  const platformExists = await getPlatformByName(name);

  if(platformExists){
    throw {message:'Esta plataforma ja está cadastrada!'};
  }

  const result = await platformsRepository.createPlatform(name);

  return result;
}

export async function getPlatforms(){
  return platformsRepository.getPlatform();
}