import Skeleton from "../ui/skeleton";

interface Props {
  count: number;
}
const PokemonCardSkeleton = ({ count }: Props) => {
  const skeletonArray = Array.from({ length: count }, (_, index) => index);

  return (
    <>
      {skeletonArray.map((_, index) => (
        <div key={index} className="bg-gray-400 p-3 rounded-lg cursor-pointer">
          <div className="flex justify-between gap-2">
            <div>
              <Skeleton className="h-6 w-18  md:w-22 mb-2" />
              <Skeleton className="w-10 mb-1" />
              <Skeleton className="w-10 mb-1" />
            </div>
            <Skeleton className="w-full h-24" />
          </div>
        </div>
      ))}
    </>
  );
};

export default PokemonCardSkeleton;
