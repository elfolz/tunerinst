class TunerProcessor extends AudioWorkletProcessor {
	
	static get parameterDescriptors() {
		return [{
			name: 'bufferSize',
			defaultValue: 2048
		}]
	}

	buffer = []

	process(inputs, outputs, params) {
		if (!inputs[0][0]) return true
		if (this.buffer?.length < params.bufferSize[0]) this.buffer = [...this.buffer, ...inputs[0][0]]
		if (this.buffer?.length >= params.bufferSize[0]) {
			this.port.postMessage({buffer: this.buffer})
			this.buffer.splice(0)
		}
		return true
	}

}

registerProcessor('tuner-processor', TunerProcessor)