export default function Video() {
    return (
        <div className="relative h-[612px] w-[1518px]">
            <div className="absolute top-0 left-0 h-[612px] w-[1518px] rounded-3xl bg-zinc-300" />
            <img
                className="absolute top-0 left-0 h-[700px] w-[1579px]"
                src="https://placehold.co/1579x700"
            />
            <div className="absolute top-[223px] left-[676px] h-40 w-40 rounded-full bg-gradient-to-b from-red-600 to-stone-950 outline outline-1 outline-white/40" />
            <div className="absolute top-[275px] left-[786px] h-14 w-16 origin-top-left rotate-90 bg-white" />
        </div>
    );
}
