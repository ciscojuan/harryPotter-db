import { getCharacterById } from "@/utils/queries";
import { Character } from "../../characters/interfaces";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

interface character {
  character: Character;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id } = params;
    const characterData = await getCharacterById(id);
    const character: Character = characterData[0];

    return {
      title: `${character.name}`,
      description: `Character # ${character.id} - ${character.name}`,
    };
  } catch (error) {
    return {
      title: `Character not found`,
      description: `Character not found`,
    };
  }
}

export default async function CharacterPage({ params }: Props) {
  try{
    const { id } = params;
    const characterData = await getCharacterById(id);
    const character = characterData[0];
    const {
      name,
      alternate_names,
      species,
      gender,
      house,
      dateOfBirth,
      yearOfBirth,
      wizard,
      ancestry,
      eyeColour,
      hairColour,
      wand,
      patronus,
      hogwartsStudent,
      actor,
      alive,
      image,
    } = character;
    console.log(character);
    return (
      <div className="flex flex-col justify-center items-center ">
        <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3 ">
          <div className="mt-2 mb-8 w-full">
            <h4 className="text-4xl text-gray-900 text-center">{name}</h4>
          </div>

          <div className="my-4">
            <Image
              src={image}
              alt={name}
              width={160}
              height={160}
              className="rounded-xl mb-4"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 px-2 w-full">
            <div className="flex flex-col items-start justify-center rounded-2xl px-3">
              <p className="text-sm text-gray-600">Species</p>
              <p className="font-medium text-black  ">{species}</p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl px-3">
              <p className="text-sm text-gray-600">Gender</p>
              <p className="font-medium text-black">{gender}</p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl px-3">
              <p className="text-sm text-gray-600">House</p>
              <p className="font-medium text-black ">{house}</p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl px-3">
              <p className="text-sm text-gray-600">Date of Birth</p>
              <p className="font-medium text-black  ">{dateOfBirth}</p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl px-3">
              <p className="text-sm text-gray-600">Year of Birth</p>
              <p className="font-medium text-black  ">{yearOfBirth}</p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl px-3">
              <p className="text-sm text-gray-600">is Wizard?</p>
              <p className="font-medium text-black  ">{wizard}</p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl px-3">
              <p className="text-sm text-gray-600">Ancestry</p>
              <p className="font-medium text-black ">{ancestry}</p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl px-3">
              <p className="text-sm text-gray-600">Eye Colour</p>
              <p className="font-medium text-black ">{eyeColour}</p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl px-3">
              <p className="text-sm text-gray-600">Hair Colour</p>
              <p className="font-medium text-black  ">{hairColour}</p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl px-3">
              <p className="text-sm text-gray-600">Wand</p>
              <p className="font-medium text-black  ">
                {`${wand.wood}, ${wand.core}, ${wand.length}`}
              </p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl px-3">
              <p className="text-sm text-gray-600">Patronous</p>
              <p className="font-medium text-black  ">{patronus}</p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl px-3">
              <p className="text-sm text-gray-600">Live in Hogwars as:</p>
              <p className="font-medium text-black  ">
                {hogwartsStudent ? "Student" : "Staff"}
              </p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl px-3">
              <p className="text-sm text-gray-600">
                {gender == "female" ? "Actress" : "Actor"}
              </p>
              <p className="font-medium text-black ">{actor}</p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl px-3">
              <p className="text-sm text-gray-600">Still Alive?</p>
              <p className="font-medium text-black  ">{alive ? "Yes" : "No"}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }catch(error){
    notFound()
  }
}
