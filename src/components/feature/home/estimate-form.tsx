"use client";

import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { boolean, z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Icons } from "@/components/ui/icons";

const formSchema = z.object({
  isCalibration: z.coerce.boolean(),
  isCaption: z.coerce.boolean(),
  length: z.coerce.number(),
  name: z.string().min(2).optional(),
  contact: z.string().min(2).optional(),
});

function EstimateForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEstimate, setIsEstimate] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);
  const [displayedPrice, setDisplayedPrice] = useState<number>(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isCalibration: false,
      isCaption: false,
      length: 1,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setIsEstimate(true);

    /**
     * 기본: 9,000원
     * 자막: 3,000원
     * 보정: 3,000원
     * 분당: 곱셈
     */
    const basePrice = 9000;
    const captionPrice = values.isCaption ? 3000 : 0;
    const calibrationPrice = values.isCalibration ? 3000 : 0;
    const length = values.length;

    console.log(values.isCaption);

    const sumPrice = (basePrice + captionPrice + calibrationPrice) * length;
    setPrice(sumPrice);

    setIsLoading(false);
  }

  useEffect(() => {
    let animationFrameId: number;
    const startPrice = 0;
    const endPrice = price;
    const animationDuration = 1000; // 애니메이션 지속 시간 (밀리초)

    const startTime = performance.now();

    const updatePrice = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);
      const animatedPrice = Math.floor(
        progress * (endPrice - startPrice) + startPrice,
      );
      setDisplayedPrice(animatedPrice);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updatePrice);
      }
    };

    animationFrameId = requestAnimationFrame(updatePrice);

    return () => cancelAnimationFrame(animationFrameId);
  }, [price]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-96 mt-8"
      >
        <FormField
          control={form.control}
          name="isCaption"
          render={({ field }) => (
            <FormItem>
              <div className="items-top flex space-x-2">
                <Checkbox
                  id="isCaption"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="isCaption"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    기본 자막과 다른 형태의 자막이 필요한가요?
                  </label>
                </div>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isCalibration"
          render={({ field }) => (
            <FormItem>
              <div className="items-top flex space-x-2">
                <Checkbox
                  id="isCalibration"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="isCalibration"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    영상 보정이 필요한가요?
                  </label>
                </div>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="length"
          render={({ field }) => (
            <FormItem>
              <FormLabel>편집된 영상이 몇분이면 좋겠나요?</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="숫자를 입력해주세요."
                  defaultValue={1}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className={"w-full"}
          variant={`${isEstimate ? "outline" : "default"}`}
        >
          견적보기
        </Button>
        {isEstimate && (
          <div className="flex flex-col text-center mt-8">
            <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
              편집 비용은 약 <b>{displayedPrice.toLocaleString()}</b> 원 입니다.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              * 실제 비용은 견적과 상이할 수 있습니다.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="name"
                        placeholder="업체명(이름)을 입력해주세요."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="연락처를 입력해주세요." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="mt-4" type="submit" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-4 h-4 w-4 animate-spin" />
              )}
              의뢰하기
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
}

export default EstimateForm;
