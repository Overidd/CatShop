'use client'
import { CartPayDireccion } from "@/components/carts/CartPayDireccion";
import { CartPayMethod } from "@/components/carts/CartPayMethod";
import { useRouter } from "next/navigation";
import { useAuth } from '@clerk/nextjs';

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { isSignedIn } = useAuth();
  const navigation = useRouter();
  const paymetohod = 'paymetohod' === id;
  const paydireccion = 'paydireccion' === id;

  if (!isSignedIn) {
    navigation.push(`/login?pay=/cart/${id}`);
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