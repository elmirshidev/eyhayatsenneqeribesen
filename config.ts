export type EventConfig = {
	logoShow: boolean;
	newSetPage: {
		buttonDesc: string;
		dynamicPage: boolean;
		dynamicRequired: string;
	};
	EmailConfig: {
		bcc: string;
	};
	fieldsConfig: {
		fields: any[];
		translate: string;
		staticFields: {
			email: {
				isRequired: boolean;
			};
			phone: {
				isRequired: boolean;
			};
			company: {
				isRequired: boolean;
				companyInput: boolean;
			};
			position: {
				isRequired: boolean;
				positionInput: boolean;
			};
		};
	};
	SmsIntegration: {
		smsLogin: string;
		smsPassword: string;
		smsSenderName: string;
	};
	attendeOfLimit: boolean;
	attendeLimitCount: number;
};


export type TicketConfig = {
	agenda: boolean;
	ticketLink: boolean;
	badgeConfig: {
		qrX: number;
		qrY: number;
		nameX: number;
		nameY: number;
		qrWidth: number;
		addressX: number;
		addressY: number;
		companyX: number;
		companyY: number;
		upHeight: number;
		pageWidth: number;
		positionX: number;
		positionY: number;
		textWidth: number;
		downHeight: number;
		pageHeigth: number;
		alignCenter: string;
		nameFontSize: number;
		companyFontSize: number;
		doubleSideBadge: boolean;
		positionFontSize: number;
	};
	ticketConfig: {
		qrX: number;
		qrY: number;
		textX: number;
		textY: number;
		qrWidth: number;
		nameTextX: number;
		nameTextY: number;
		textColor: string;
		sideByside: boolean;
		ticketFont: {
			[key: string]: {
				fontname: string;
				selected: boolean;
			}
		}
		ticketName: string;
		alignCenter: string;
		ticketWidth: number;
		surnameTextX: number;
		surnameTextY: number;
		ticketHeigth: number;
		nameSurnameFontSize: number;
	};
	ticketEmptyConfig: {
		qrX: number;
		qrY: number;
		textX: number;
		textY: number;
		qrWidth: number;
		pageWidth: number;
		textColor: string;
		pageHeight: number;
		ticketName: string;
		alignCenter: string;
	};
};
