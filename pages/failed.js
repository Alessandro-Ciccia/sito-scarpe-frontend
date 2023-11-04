import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Failed = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">Pagamento fallito!</div>
          <div className="text-base mt-5">Per qualsiasi domanda, contatta</div>
          <div className="underline">amministrazione@galaxweb.it</div>

          <Link href="/" className="font-bold mt-5">
            Continua lo shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Failed;
