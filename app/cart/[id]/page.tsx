'use client'
import { CartPayDireccion } from "@/components/carts/CartPayDireccion";
import { CartPayMethod } from "@/components/carts/CartPayMethod";
import { useRouter } from "next/navigation";
import { useAuth } from '@clerk/nextjs';

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { isSignedIn } = useAuth();
  const navigation = useRouter();
  const paydireccion = 'paydireccion' === id;
  const paymetohod = 'paymetohod' === id;

  if (!isSignedIn) {
    navigation.push(`/login?pay=/cart/${id}`);
    return null
  }

  if (id !== 'paymetohod' && id !== 'paydireccion') {
    navigation.back();
  }

  return (
    <>
      {paydireccion && <CartPayDireccion />}
      {paymetohod && <CartPayMethod />}
    </>
  );
};

export default Page;