'use client'
import { CartPayDireccion, CartPayMethod} from "@/components/carts";
import { useRouter } from "next/navigation";
import { useAuth } from '@clerk/nextjs';

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { isSignedIn } = useAuth();
  const navigation = useRouter();
  const paymetohod = 'paymetohod' === id;
  const paydireccion = 'paydireccion' === id;

  if (!isSignedIn) {
    navigation.push(`/login?redirectTo=/cart/${id}`);
    return null
  }

  if (id !== 'paymetohod' && id !== 'paydireccion') {
    navigation.back();
  }

  return (
    <>
      {paymetohod && <CartPayMethod />}
      {paydireccion && <CartPayDireccion />}
    </>
  );
};

export default Page;
