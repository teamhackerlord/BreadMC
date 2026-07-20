// Discord webhook utility
// Note: You need to create a Discord webhook URL from your server settings
// Replace this with your actual webhook URL
const DISCORD_WEBHOOK_URL = "YOUR_DISCORD_WEBHOOK_URL";

interface UserInfo {
  ip: string;
  browser: string;
  device: string;
  timestamp: string;
  userAgent: string;
}

export async function sendUserInfoToDiscord(): Promise<void> {
  try {
    // Get user's public IP
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const { ip } = await ipResponse.json();

    // Get browser info
    const userAgent = navigator.userAgent;
    const browser = detectBrowser(userAgent);
    const device = detectDevice(userAgent);

    // Prepare payload for Discord webhook
    const payload = {
      embeds: [
        {
          title: "Người dùng mới truy cập BreadMC",
          color: 0xff6b6b, // Red color
          fields: [
            {
              name: "Địa chỉ IP",
              value: ip,
              inline: true,
            },
            {
              name: "Trình duyệt",
              value: browser,
              inline: true,
            },
            {
              name: "Thiết bị",
              value: device,
              inline: true,
            },
            {
              name: "Thời gian",
              value: new Date().toLocaleString("vi-VN"),
              inline: true,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "BreadMC Website Analytics",
          },
        },
      ],
    };

    // Send to Discord
    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("User info sent to Discord successfully!");
  } catch (error) {
    console.error("Failed to send user info to Discord:", error);
  }
}

function detectBrowser(userAgent: string): string {
  if (/Edg/.test(userAgent)) return "Microsoft Edge";
  if (/Chrome/.test(userAgent)) return "Google Chrome";
  if (/Firefox/.test(userAgent)) return "Mozilla Firefox";
  if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) return "Safari";
  if (/Opera|OPR/.test(userAgent)) return "Opera";
  return "Unknown Browser";
}

function detectDevice(userAgent: string): string {
  if (/Android/.test(userAgent)) return "Mobile (Android)";
  if (/iPhone|iPad|iPod/.test(userAgent)) return "Mobile (iOS)";
  if (/Mobile/.test(userAgent)) return "Mobile (Other)";
  return "Desktop";
}
