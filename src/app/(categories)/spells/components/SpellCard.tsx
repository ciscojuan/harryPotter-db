import { IoHeartOutline } from "react-icons/io5";
import { Spells } from "../interfaces/spells";
import Link from "next/link";
import { IoIosBaseball } from "react-icons/io";

interface Props {
  spell: Spells[];
}
export default function SpellCard({ spell }: Props) {

const {id, name, description} = spell
  return (
    <div>
      <div className="  mt-2 w-60 flex gap-5 ">
        <div className="bg-white rounded  shadow-lg">
          <div className="text-center p-6 bg-gray-800 border-b">
            
              <IoIosBaseball
                size={50}
                className="w-10 h-10 rounded-full mx-auto mb-4 text-white"
              />
            
            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
              {name}
            </p>
            <div className="mt-5">
              <Link
                href={`/spell/${id}`}
                className="border rounded-full py-2 px-4 font-semibold text-gray-100 text-lg"
              >
                View Spell
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
    </div>
  );
}
