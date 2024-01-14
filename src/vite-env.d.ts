/// <reference types="vite/client" />

declare module '*.ng' {
	import type { Type } from '@angular/core';

	const entity: Type<any>;
	export default entity;
}
