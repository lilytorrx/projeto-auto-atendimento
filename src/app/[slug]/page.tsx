import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import Image from "next/image";
import { notFound } from "next/navigation";
interface RestaurantPageProps {
    params: Promise<{slug: string}>;
}

const RestaurantPage = async ({params}: RestaurantPageProps) => {
    const {slug} = await params;
    const restaurant = await getRestaurantBySlug(slug);
    if(!restaurant) {
        return notFound()
    }
    return ( 
        <div className="h-screen flex flex-col items-center justify-center px-6 pt-24">
            <div className="flex flex-col items-center gap2">
                <Image 
                src={restaurant.avatarImageUrl} 
                alt={restaurant.name} 
                width={82} 
                height={82}
                />
                <h2 className="font-semibold">
                    {restaurant.name}
                </h2>
            </div>
            <div className="pt-24 text-center space-y-2">
                <h3 className="text-2xl font">
                    Seja bem-vinde!
                </h3>
                <p className="opacity-55">
                    Escolha como prefere aproveitar sua refeição. Estamos oferecendo praticidade, segurança e sabor em cada detalhe para você!
                </p>
            </div>
            <div className="pt-14 grid grid-cols-2">
                <Card>
                    <CardContent className="flex flex-col items-center gap-8 py-8">
                        <Button variant="secondary" classname="rounded-full">
                            Para comer aqui
                        </Button> 
                    </CardContent>

                </Card>
            </div>
        </div>
    );
}

export default RestaurantPage;