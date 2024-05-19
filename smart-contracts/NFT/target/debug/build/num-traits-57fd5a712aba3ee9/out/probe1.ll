; ModuleID = 'probe1.98c39414-cgu.0'
source_filename = "probe1.98c39414-cgu.0"
target datalayout = "e-m:e-p270:32:32-p271:32:32-p272:64:64-i64:64-f80:128-n8:16:32:64-S128"
target triple = "x86_64-unknown-linux-gnu"

@alloc_fb24ee83aa85dfb496f2abc1d22d2cb9 = private unnamed_addr constant <{ [8 x i8] }> <{ [8 x i8] c"\00\00\00\00\00\00\F0?" }>, align 8
@alloc_a2408d0ee32d75bc015427d6310f44b6 = private unnamed_addr constant <{ [8 x i8] }> <{ [8 x i8] c"\00\00\00\00\00\00\00@" }>, align 8

; core::f64::<impl f64>::total_cmp
; Function Attrs: inlinehint nonlazybind uwtable
define internal i8 @"_ZN4core3f6421_$LT$impl$u20$f64$GT$9total_cmp17h351785306d9a0b70E"(ptr align 8 %self, ptr align 8 %other) unnamed_addr #0 {
start:
  %0 = alloca i64, align 8
  %1 = alloca i64, align 8
  %_23 = alloca double, align 8
  %_21 = alloca double, align 8
  %right = alloca i64, align 8
  %left = alloca i64, align 8
  %2 = alloca i8, align 1
  %self1 = load double, ptr %self, align 8, !noundef !2
  store double %self1, ptr %_21, align 8
  %rt = load double, ptr %_21, align 8, !noundef !2
  %3 = bitcast double %rt to i64
  store i64 %3, ptr %1, align 8
  %_4 = load i64, ptr %1, align 8, !noundef !2
  store i64 %_4, ptr %left, align 8
  %self2 = load double, ptr %other, align 8, !noundef !2
  store double %self2, ptr %_23, align 8
  %rt3 = load double, ptr %_23, align 8, !noundef !2
  %4 = bitcast double %rt3 to i64
  store i64 %4, ptr %0, align 8
  %_7 = load i64, ptr %0, align 8, !noundef !2
  store i64 %_7, ptr %right, align 8
  %_13 = load i64, ptr %left, align 8, !noundef !2
  %_12 = ashr i64 %_13, 63
  %_10 = lshr i64 %_12, 1
  %5 = load i64, ptr %left, align 8, !noundef !2
  %6 = xor i64 %5, %_10
  store i64 %6, ptr %left, align 8
  %_18 = load i64, ptr %right, align 8, !noundef !2
  %_17 = ashr i64 %_18, 63
  %_15 = lshr i64 %_17, 1
  %7 = load i64, ptr %right, align 8, !noundef !2
  %8 = xor i64 %7, %_15
  store i64 %8, ptr %right, align 8
  %_26 = load i64, ptr %left, align 8, !noundef !2
  %_27 = load i64, ptr %right, align 8, !noundef !2
  %_25 = icmp slt i64 %_26, %_27
  br i1 %_25, label %bb3, label %bb4

bb4:                                              ; preds = %start
  %_29 = load i64, ptr %left, align 8, !noundef !2
  %_30 = load i64, ptr %right, align 8, !noundef !2
  %_28 = icmp eq i64 %_29, %_30
  br i1 %_28, label %bb5, label %bb6

bb3:                                              ; preds = %start
  store i8 -1, ptr %2, align 1
  br label %bb8

bb8:                                              ; preds = %bb7, %bb3
  %9 = load i8, ptr %2, align 1, !range !3, !noundef !2
  ret i8 %9

bb6:                                              ; preds = %bb4
  store i8 1, ptr %2, align 1
  br label %bb7

bb5:                                              ; preds = %bb4
  store i8 0, ptr %2, align 1
  br label %bb7

bb7:                                              ; preds = %bb6, %bb5
  br label %bb8
}

; probe1::probe
; Function Attrs: nonlazybind uwtable
define void @_ZN6probe15probe17h8ec139a6c12e9110E() unnamed_addr #1 {
start:
; call core::f64::<impl f64>::total_cmp
  %_1 = call i8 @"_ZN4core3f6421_$LT$impl$u20$f64$GT$9total_cmp17h351785306d9a0b70E"(ptr align 8 @alloc_fb24ee83aa85dfb496f2abc1d22d2cb9, ptr align 8 @alloc_a2408d0ee32d75bc015427d6310f44b6), !range !3
  ret void
}

attributes #0 = { inlinehint nonlazybind uwtable "probe-stack"="__rust_probestack" "target-cpu"="x86-64" }
attributes #1 = { nonlazybind uwtable "probe-stack"="__rust_probestack" "target-cpu"="x86-64" }

!llvm.module.flags = !{!0, !1}

!0 = !{i32 7, !"PIC Level", i32 2}
!1 = !{i32 2, !"RtLibUseGOT", i32 1}
!2 = !{}
!3 = !{i8 -1, i8 2}
