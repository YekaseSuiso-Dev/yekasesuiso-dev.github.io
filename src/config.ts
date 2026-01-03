import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "YekaseSuiso的blog",
	subtitle:
		"I wish that I could be like the cool kids, 'Cause all the cool kids, they seem to fit in.",
	lang: "zh_CN", // 語言代碼，例如 'en'、'zh_CN'、'ja' 等
	themeColor: {
		hue: 180, // 預設主題色相 (0-360)，例如：紅色 0，青綠 200，青色 250，粉色 345（目前設定為水色）
		fixed: false, // 是否鎖定主題色（隱藏訪客的主題色選擇器）
	},
	banner: {
		enable: false,
		src: "assets/images/1767234664.jpg", // 橫幅圖片路徑，相對於 /src；若以 '/' 開頭則相對於 /public
		position: "center", // 位置（相當於 object-position），僅支援 'top'、'center'、'bottom'，預設 'center'
		credit: {
			enable: false, // 是否顯示圖片署名文字
			text: "", // 署名文字
			url: "", // （可選）原作或作者頁面連結
		},
	},
	toc: {
		enable: true, // 是否在文章右側顯示目錄
		depth: 2, // 目錄最大顯示層級（1-3）
	},
	favicon: [
		// 若使用預設 favicon，請保持此陣列為空
		// 範例：
		// {
		//   src: '/favicon/icon.png',    // favicon 路徑，相對於 /public
		//   theme: 'light',              // （可選）'light' 或 'dark'，當你有不同主題的 favicon 時使用
		//   sizes: '32x32',              // （可選）圖示尺寸
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/YekaseSuiso-Dev/YekaseSuiso_blog", // 內部連結不需包含 base path，會自動加入
			external: true, // 外部連結：顯示外部連結圖示並於新分頁開啟
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/Psvr8hfy_400x400.jpg", // 頭像路徑，相對於 /src；若以 '/' 開頭則相對於 /public
	name: "葉加瀬 水素",
	bio: "「crypto是无数次的谎话，吊唁着幼稚的信念」",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // 圖示代碼參考：https://icones.js.org/，如未包含對應 icon set，請安裝（例如：`pnpm add @iconify-json/<icon-set-name>`）
			url: "https://x.com/YekaseSuiso2022",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/YekaseSuiso-Dev/",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：部分樣式（例如背景色）可能會被覆寫，請參閱 `astro.config.mjs`
	// 請選擇深色主題，因為本部落格主題目前僅支援深色背景
	theme: "github-dark",
};
