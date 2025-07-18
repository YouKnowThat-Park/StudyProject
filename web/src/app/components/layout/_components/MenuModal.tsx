"use client";
import { useModalStore } from "@/store/modal-store";
import { ModalLink } from "./LinkWrapper";
import { handleLogout } from "@/utils/Logout.ts";

export const MenuModal = () => {
  const { isOpen, close } = useModalStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-[600px] h-[400px] p-6 rounded-lg shadow-lg">
        <h1 className="text-xl">메뉴판</h1>
        <button
          onClick={close}
          className=" absolute right-[670px] top-[280px] text-sm text-gray-600"
        >
          닫기
        </button>
        <div className="border">
          <h2 className="font-semibold text-lg">회원 정보</h2>
          <div className="flex flex-col gap-1">
            <ModalLink href="/sign-up">회원 가입</ModalLink>
            <ModalLink href="/sign-in">로그인</ModalLink>
            <ModalLink href="/mypage">마이페이지</ModalLink>
            <button onClick={() => handleLogout()}>로그 아웃</button>
          </div>
        </div>
        <div className="border">
          <h2 className="font-semibold text-lg">관리자 페이지</h2>
          <div className="flex flex-col gap-1">
            <ModalLink href="/admin">관리자</ModalLink>
          </div>
        </div>
      </div>
    </div>
  );
};
