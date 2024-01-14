import { provideFileRouter } from '@analogjs/router';
import {
	ApplicationConfig,
	ɵprovideZonelessChangeDetection as provideZonelessChangeDetection,
} from '@angular/core';
import { withComponentInputBinding } from '@angular/router';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZonelessChangeDetection(),
		provideFileRouter(withComponentInputBinding()),
	],
};
