# Cryptographic Timestamps

The `.ots` files in this folder are OpenTimestamps proofs anchored
in the Bitcoin blockchain. Each `.ots` file proves that the
corresponding file existed in its exact form on the date the
timestamp was created.

To verify:

1. Install the OpenTimestamps client: `pip install opentimestamps-client`
2. Run: `ots verify v3ktor_eng.html.ots -f ../../v3ktor_eng.html`
3. The verifier will return the Bitcoin block number and date that
   anchors the proof.

Alternatively, drag any `.ots` file plus its corresponding original
file into the verifier at https://opentimestamps.org.

These timestamps establish prior art for the V3KTOR method, file
format, and reference implementation. All four files were
timestamped on 18 May 2026.
