VENV = venv
PYTHON = $(VENV)/bin/python3
PIP = $(VENV)/bin/pip

clean:
	rm -rf __pycache__
	#rm -rf $(VENV)

venv/bin/activate: requirements.txt
	python3 -m venv $(VENV)
	./$(PIP) install -r requirements.txt

setup: requirements.txt
	pip install -r requirements.txt

run: $(VENV)/bin/activate
	uvicorn app.main:app --reload
