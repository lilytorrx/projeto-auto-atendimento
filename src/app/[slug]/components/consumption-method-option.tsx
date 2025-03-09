import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ConsumptionMethod } from "@prisma/client";

interface ConsumptionMethodOptionProps {
    option: ConsumptionMethod,
    imageUrl: string,
    alt: string,
    buttonText: string,
    slug: string
}

const ConsumptionMethodOption = ({imageUrl, alt, buttonText, option, slug}: ConsumptionMethodOptionProps) => {
    return ( 
        <>
            <Card>
                <CardContent className="flex flex-col items-center gap-8 py-8">
                    <div className="relative h-[80px] w-[80px]">
                        <Image src={imageUrl} fill alt={alt} className="object-contain"></Image>
                    </div>
                    <Button variant="secondary" className="rounded-full">
                        <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
                            {buttonText}
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </> 
    );
}

export default ConsumptionMethodOption;