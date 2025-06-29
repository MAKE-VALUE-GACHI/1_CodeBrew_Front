export interface NavBarProps {
  // 아직 예시로 작성된 부분이므로, 실제 사용자 정보에 맞게 수정 필요
  user?: {
    id: string;
    name?: string;
    email?: string;
    imageUrl?: string;
  } | null;
}
