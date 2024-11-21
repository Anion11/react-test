interface ImportMetaEnv {
	MODE: string
	PROD: boolean
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
