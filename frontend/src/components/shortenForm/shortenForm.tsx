import { Button } from "@/components/ui/button"
import { SubmitHandler, useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import urlFormStore from "@/store/shortenUrl/urlFormStore"
import { UrlFormValues } from "@/store/shortenUrl/urlFormStore"

const ShortUrlForm = () => {

    const { setUrlForm } = urlFormStore()

    const form = useForm<UrlFormValues>({
        defaultValues: {
            originalUrl: "",
            customUrl: ""
        },
    });

    const onSubmit: SubmitHandler<UrlFormValues> = async (data) => {
        setUrlForm(data)

    }

    return (
        <>
            <main className="flex justify-center items-center py-5">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="originalUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="url" required placeholder="https://example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="customUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="text" maxLength={50} placeholder="custom-Url" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Jika tidak diisi, URL akan otomatis digenerate.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" variant={"secondary"} className="hover:cursor-pointer">Shorten URL</Button>
                    </form>
                </Form>
            </main>
        </>
    )
}

export default ShortUrlForm