import { ChangeEventHandler, useState } from "react";
import Button from "../ui/buttons/Button";
import InputError from "../error/InputError";
// * TYPES
// interface Props {}
interface InvalidError {
  field: "name" | "email" | "message";
  msg: string;
}

// * COMPONENT: ContactForm
function ContactForm() {
  // const name = useRef<HTMLInputElement>(null);
  // const email = useRef<HTMLInputElement>(null);
  // const msg = useRef<HTMLTextAreaElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState<InvalidError | null>(null);

  const handleNameInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  // if (email && email.trim() === "") {
  //   return setInvalid({ field: "email", msg: "Sorry, invalid format here" });
  // }
  // if (message && message.trim() === "") {
  //   return setInvalid({
  //     field: "message",
  //     msg: "Sorry, please enter a message",
  //   });
  // }

  const submitHandler: React.FormEventHandler = (e) => {
    e.preventDefault();

    if (!name || name.trim() === "") {
      console.log("in name", name);
      return setInvalid({
        field: "name",
        msg: "Sorry, please insert a name here",
      });
    } else if (!email || email.trim() === "") {
      return setInvalid({ field: "email", msg: "Sorry, invalid format here" });
    } else if (!message || message.trim() === "") {
      console.log(" in the message");
      return setInvalid({
        field: "message",
        msg: "Sorry, please enter a message",
      });
    } else {
      console.log("in the else");
      setInvalid(null);
    }

    // if (!name.current) {
    //   setInvalid({ field: "name", msg: "Sorry, please insert a name here" });
    // } else if (!email.current) {
    //   setInvalid({ field: "email", msg: "Sorry, invalid format here" });
    // } else if (!msg.current) {
    //   setInvalid({ field: "msg", msg: "Sorry, please enter a message" });
    // } else {
    //   setInvalid(null);
    // }
  };

  // @ Output
  return (
    <form
      className="flex flex-col space-y-8 md:w-[445px]"
      onSubmit={submitHandler}
    >
      {/* <input type="text" placeholder="Name" /> */}

      <div className="relative flex flex-col">
        <input
          placeholder="Name"
          type="text"
          className={`placeholder:uppercase pb-4 px-6 text-[16px] text-white leading-[26px] tracking-[-0.22px] border-b-[1px] bg-transparent ${
            invalid
              ? invalid.field === "name"
                ? " border-b-rose-500"
                : " border-b-green"
              : ""
          }`}
          // ref={name}
          onChange={handleNameInput}
          value={name}
        />
        {invalid && invalid.field === "name" && (
          <InputError msg={invalid.msg} />
        )}
      </div>

      <div className="relative flex flex-col">
        <input
          placeholder="Email"
          type="email"
          // ref={email}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={`placeholder:uppercase pb-4 px-6 text-[16px] text-white leading-[26px] tracking-[-0.22px] border-b-[1px] bg-transparent ${
            invalid
              ? invalid.field === "email"
                ? " border-b-rose-500"
                : " border-b-green"
              : ""
          }`}
        />
        {invalid && invalid.field === "email" && (
          <InputError msg={invalid.msg} />
        )}
      </div>

      <div className="relative flex flex-col">
        <textarea
          name="message"
          id="message"
          cols={10}
          rows={4}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          // ref={msg}
          placeholder="Message"
          className={`placeholder:uppercase pb-4 px-6 text-[16px] text-white leading-[26px] tracking-[-0.22px] border-b-[1px] bg-transparent ${
            invalid
              ? invalid.field === "message"
                ? " border-b-rose-500"
                : " border-b-green"
              : ""
          }`}
        ></textarea>
        {invalid && invalid.field === "message" && (
          <InputError msg={invalid.msg} />
        )}
      </div>

      {/* {invalid && invalid.msg} */}

      <Button type="submit" className="self-end">
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
