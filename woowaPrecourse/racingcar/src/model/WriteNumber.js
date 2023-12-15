export class WriteNumber {
	#number;

	constructor(number) {
		this.#validate(number);
		this.#number = number;
	}

	#validate(number) {
		if (!number || number < 1) {
			throw new Error('[ERROR] 1 이상의 숫자만 입력이 가능합니다.');
		}
	}
}
