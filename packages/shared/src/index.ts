export type UserRole = "USER" | "ADMIN";

export type BookingStatus = "CONFIRMED" | "CANCELLED";

export interface ClassSession {
  id: string;
  title: string;
  startsAt: string; // ISO
  durationMinutes: number;
  trainerName: string;
  capacity: number;
  bookedCount: number;
}

export interface Booking {
  id: string;
  userId: string;
  sessionId: string;
  status: BookingStatus;
  createdAt: string; // ISO
}
