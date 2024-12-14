type ContainerType = {
    children: React.ReactNode
}

export default function Container({ children }: ContainerType) {
  return (
    <div className="max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col border-r-2 border-l-2">
        {children}
    </div>
  )
}
