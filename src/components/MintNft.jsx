import Img from "../assets/100xNFT.png";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { abi } from "../abi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function MintNFT() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    writeContract({
      address: "0x30f07eeb644cd2d265358d621da63af8435514c2",
      abi,
      functionName: "mintNft",
    });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  // useEffect(() => {
  //     if (hash) {
  //       toast.success(`Transaction Hash: ${hash}`, { duration: 5000 });
  //     }
  //     else if (isConfirming) {
  //       toast.loading("Waiting for confirmation...");
  //     } else if (isConfirmed) {
  //       toast.dismiss(); // Dismiss loading toast
  //       toast.success("Transaction confirmed!");
  //     } else if (error) {
  //       toast.dismiss(); // Dismiss loading toast
  //       toast.error(`Error: ${error.shortMessage || error.message}`);
  //     }
  //   }, [hash, isConfirming, isConfirmed, error]);

  return (
    <main className="  px-[1rem] md:px-[3rem]   py-[2rem]  h-full">
      <div className=" float-right">
        <ConnectButton />
      </div>
      <div className="mt-[4rem] md:mt-[3.5rem] flex-col md:flex-row flex justify-between  ">
        <div className="flex flex-col justify-center gap-5">
          <h1 className="font-[font-1] text-4xl md:text-6xl">
            100x NFT for All the <br /> 100x out there!
          </h1>
          <h5 className="font-mono text-2xl md:text-4xl">
            Week 10 ya 11 web3 assignment
          </h5>
          <p className="text-[13px] md:text-lg mb-[1.5rem]">
            1. Mint the NFT in Sepolia Network <br />
            2. you can go to{" "}
            <a
              href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia"
              target="_blank"
              className="underline"
            >
              Sepolia Faucet
            </a>{" "}
            for the Gas token. <br />
            3. Head to{" "}
            <a
              href="https://testnets.opensea.io/"
              className="underline"
              target="_blank"
            >
              Testnet Opensea <br />
            </a>
            4. Connect your wallet there, go to your profile and see the minted
            NFT
          </p>
        </div>
        <div className="">
          <div className="h-[450px]  md:w-[500px] rounded-md overflow-hidden  border-black/80  bg-white/20 backdrop-blur-lg bg-opacity-20 ">
            <img
              src={Img}
              alt=""
              className="h-full w-full md:p-5 md:rounded-3xl"
            />
          </div>
          <form onSubmit={submit}>
            <button
              disabled={isPending}
              type="submit"
              className="border border-white py-3 rounded-lg my-4 md:w-[500px] w-full backdrop-blur-md shadow-2xl bg-black text-white text-center"
            >
              {isConfirming ? <Loader /> : "Mint NFT"}
            </button>
            {hash && (
              <div className="font-medium">
                Transaction Hash: <br />
                {hash}
              </div>
            )}
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed && <div>Transaction confirmed.</div>}
            {error && <div>Error: {error.shortMessage || error.message}</div>}

            {/* <Toaster position="top-left" /> */}
          </form>
        </div>
      </div>
    </main>
  );
}

function Loader() {
  return (
    <div role="status" className="flex justify-center items-center">
      <svg
        aria-hidden="true"
        class="w-8 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  );
}
