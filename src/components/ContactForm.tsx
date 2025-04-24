"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
} from "@/components/ui/toast";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  name: string;
  senderEmail: string;
  message: string;
}

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email");
      }

      // Show success toast and reset the form
      setToast({
        title: "Success",
        description: "Email sent successfully!",
      });
      reset(); // Reset the form after successful submission
    } catch (err: any) {
      // Show error toast
      setToast({
        title: "Error",
        description: err.message || "Something went wrong",
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <ToastProvider>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle className="icon_underline">Send me a mail.</CardTitle>
            <CardDescription>
              Once the form is submitted, you will receive a confirmation.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register("senderEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.senderEmail && (
                <p className="text-red-600 text-sm">
                  {errors.senderEmail.message}
                </p>
              )}
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
              <Label htmlFor="message">Your Message</Label>
              <textarea
                id="message"
                placeholder="Your message here..."
                {...register("message", { required: "Message is required" })}
                className="resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              ></textarea>
              {errors.message && (
                <p className="text-red-600 text-sm">{errors.message.message}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </Button>
          </CardFooter>
        </form>
      </Card>
      {toast && (
        <Toast>
          <ToastTitle>{toast.title}</ToastTitle>
          <ToastDescription>{toast.description}</ToastDescription>
        </Toast>
      )}
      <ToastViewport />
    </ToastProvider>
  );
};

export default ContactForm;
