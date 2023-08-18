import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');
  if (error) {
    console.log(error);
    throw new Error('加载失败！');
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.log(error);
    throw new Error('删除失败！');
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  console.log(newCabin, id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1.创建/更新cabin
  let query = supabase.from('cabins');

  //a) 创建
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //b)更新
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  //1.只创建cabin
  // const { data, error } = await supabase
  //   .from('cabins')
  //   .insert([{ ...newCabin, image: imagePath }])
  //   .select();

  if (error) {
    console.log(error);
    throw new Error('创建失败！');
  }

  //2.上传图片
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  if (storageError) {
    throw new Error('上传图片失败！');
  }
  return data;
}

// export async function createEditCabin(newCabin, id) {
//   const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//     '/',
//     ''
//   );
//   const imagePath = hasImagePath
//     ? newCabin.image
//     : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

//   // 1. Create/edit cabin
//   let query = supabase.from('cabins');

//   // A) CREATE
//   if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

//   // B) EDIT
//   if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

//   const { data, error } = await query.select().single();

//   if (error) {
//     console.error(error);
//     throw new Error('Cabin could not be created');
//   }

//   // 2. Upload image
//   if (hasImagePath) return data;

//   const { error: storageError } = await supabase.storage
//     .from('cabin-images')
//     .upload(imageName, newCabin.image);

//   // 3. Delete the cabin IF there was an error uplaoding image
//   if (storageError) {
//     await supabase.from('cabins').delete().eq('id', data.id);
//     console.error(storageError);
//     throw new Error(
//       'Cabin image could not be uploaded and the cabin was not created'
//     );
//   }

//   return data;
// }
