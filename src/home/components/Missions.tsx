

export const Missions = () => {

    return (<>

        <div className="bg-white py-6 w-10/12 mx-auto">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
                    <Feature title="Test" description="" icon={<></>} />
                    <Feature title="" description="" icon={<></>} />
                    <Feature title="" description="" icon={<></>} />
                </div>
            </div>
        </div>
    </>)
}

interface IFeature {
    title: string
    description: string
    icon: React.ReactNode
}

const Feature = ({ title, description, icon }: IFeature) => {
    return (
        <div className="flex gap-4 md:gap-6">
            <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-600 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                {icon}
            </div>

            <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">{title}</h3>
                <p className="mb-2 text-gray-500">{description}</p>
            </div>
        </div>
    )
}