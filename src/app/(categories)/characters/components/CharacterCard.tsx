import { SimpleCharacter } from "@/character/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosPerson } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  character: SimpleCharacter[];
}

export const CharacterCard = ({ character }: Props) => {
  const { image, name, id, house } = character;

  return (
    <div className="  mt-2 w-60 flex gap-5 ">
      <div className="bg-white rounded  shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={150}
              height={150}
              className="rounded-full mx-auto"
              priority={false}
            />
          ) : (
            <IoIosPerson
              size={50}
              className="w-10 h-10 rounded-full mx-auto mb-4 text-white"
            />
          )}
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <p className="text-sm text-gray-100 capitalize">{house}</p>
          <div className="mt-5">
            <Link
              href={`/character/${id}`}
              className="border rounded-full py-2 px-4 font-semibold text-gray-100 text-lg"
            >
              View Character
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/"
            className="px-4 py-2 hover:bg-gray-100 flex justify-center"
          >
            <div className="text-red-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Marcar como favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
