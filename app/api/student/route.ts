export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  return Response.json({
    succes: true,
    data: { id: 1, name: "student", class: 5 },
  });
}
