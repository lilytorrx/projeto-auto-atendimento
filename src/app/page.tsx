import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
    return (
        <div className="p-5 border border-red-500 rounded-xl">
            <h1 className="text-red-500">Página de produtos</h1>
            <Button>Lily Donalds</Button>
            <Input placeholder="ALGUÉM ME TRUCIDA POR FAVOR"></Input>
        </div>
    );
}

export default HomePage;