import React from "react";
import { LuSendHorizonal } from "react-icons/lu";

function ChatWindow() {
  return (
    <div className="p-3 flex flex-col justify-between h-full space-y-4">
      <div className="overflow-y-scroll px-8 text-justify">
        <h1>Chats</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          voluptas explicabo quasi corporis! Sit ex vero accusamus veniam,
          blanditiis minima! Maiores facilis, aspernatur quo laborum ratione
          cupiditate dignissimos unde repellat aliquid dolor nesciunt dolorum
          inventore maxime quisquam est architecto veritatis pariatur dolores
          voluptatum. 
          <br /><br /><br />
          Incidunt praesentium laudantium, suscipit aperiam quis
          vero atque deserunt necessitatibus vitae voluptatum cupiditate impedit
          neque! Corporis non in quod enim praesentium eius temporibus soluta
          corrupti sit, eligendi consequuntur nemo deserunt ducimus magnam
          commodi aperiam iure quasi aliquid.
          <br /><br /><br />
          Alias, error unde dolor amet deserunt nostrum
          enim architecto asperiores numquam corrupti, ea delectus praesentium
          libero, aliquam accusamus quibusdam debitis fugit ipsum maiores animi
          placeat distinctio porro corporis soluta? Doloribus possimus adipisci
          et autem assumenda aut, pariatur fugiat doloremque debitis voluptas,
          soluta cum magnam? Porro ullam optio eos quisquam sequi quod. Vero
          voluptatum odio pariatur nemo ad delectus atque repudiandae, eligendi
          quis maiores illo at recusandae. 
          <br /><br /><br />
          Nemo, ratione! A similique aperiam,
          impedit maiores nesciunt eum. Sit, sint repudiandae, corporis corrupti
          culpa inventore minus, recusandae rem quis laboriosam expedita debitis
          dignissimos accusamus. Facere fuga, tenetur voluptates soluta a
          voluptatum ducimus reiciendis officiis quidem possimus fugiat aliquam
          similique enim molestiae repellat commodi blanditiis rerum neque
          quaerat aperiam voluptatem! Eligendi ut unde aliquid doloremque odit
          quis eum dolorem nihil nulla quam? Fugit numquam delectus, quam
          dolorum fuga quidem voluptas vel, voluptates, eveniet tempore
          explicabo voluptate rerum officia fugiat laborum recusandae neque
          earum assumenda odit. 
          <br /><br /><br />
          Quibusdam accusantium, libero temporibus omnis rem architecto dicta voluptatibus
          reprehenderit! Deserunt voluptatibus quos saepe nemo est earum
          molestiae aperiam soluta voluptatem expedita! Repudiandae laboriosam
          odit iusto doloribus vero itaque animi cumque maiores, tempore
          recusandae voluptate ullam optio sequi distinctio dolorum corrupti,
          accusamus eum ratione minus consectetur ad quos reiciendis?
        </p>
      </div>
      <div className="pt-2 pb-3 px-8">
        <form action="/search" className="w-full">
          <div className="relative">
            <input
              type="text"
              className="w-full border h-10 shadow p-4 rounded-md bg-[#1A2232] text-white"
              placeholder="Search anything . . ."
            />
            <button type="submit">
              <LuSendHorizonal className="h-5 w-5 absolute top-2.5 right-3 text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;
